export default class State {
	constructor (net) {
		this._timer = new SmoothTimer()

		this._state = null
		this._start_time = 0
		this._end_time = 0

		this._diff_buffer = []
	
		this.delay_ticks = 1.5
	
		net.on('init', data => {
			this._timer.add_sync(data.time)
			this._state = data.state
		})

		net.on('diff', data => {
			this._timer.add_sync(data.time)
			this._diff_buffer.push(data)
		})
	}

	get_state() {
		const delay = this._state.server.ms_per_tick * this.delay_ticks 
		const time = this._timer.get_time() - delay

		this.advance_buffer(time)

		if (this._end_time) {
			const snap_time = this._timer.get_time() - delay

			const delta = (snap_time - this._start_time) / (this._end_time - this._start_time)
			apply_interps(this._state, delta)

			return this._state
		}

		return null
	}

	advance_buffer(time) {
		while (this._diff_buffer.length > 1 && this._diff_buffer[0].time <= time) {
			const diff = this._diff_buffer.shift()
			const next = this._diff_buffer[0]
			
			apply_diff(this._state, diff.state)
			mark_interps(this._state, next.state)

			this._start_time = diff.time
			this._end_time = next.time
		}
	}
}

function apply_diff(state, diff) {
	for (let key of Object.keys(diff)) {
		const pre = key.charAt(0)
		const rest = key.substring(1)

		if (pre == '+' || pre == '~') {
			state[rest] = diff[key]
			continue
		}

		if (pre == '-') {
			delete state[rest]
			continue
		}

		// Recurse
		if (state.hasOwnProperty(key)) {
			apply_diff(state[key], diff[key])
		} else {
			console.error(`State has no key '${key}'`)
		}
	}
}

function mark_interps(state, diff) {
	state._interp = []
	sub(state, diff)

	function sub(substate, subdiff) {
		for (let key in subdiff) {
			const pre = key.charAt(0)

			if (pre == '+' || pre == '-') continue

			if (pre == '~') {
				const rest = key.substring(1)
				state._interp.push({
					target: substate,
					key: rest,
					start: substate[rest],
					end: subdiff[key]
				})
				continue
			}
			
			if (substate.hasOwnProperty(key)) {
				sub(substate[key], subdiff[key])
			} else {
				console.error(`State has no key '${key}'`)
			}
		}
	}
}

function apply_interps(state, delta) {
	for (let interp of state._interp) {
		interp.target[interp.key] = generic_lerp(interp.start, interp.end, delta)
	}
}

class SmoothTimer {
    constructor() {
        this._offset = null
        this._delta = 0.1
    }

    get_time() {
        const now = Date.now()
        return now + this._offset
    }

    add_sync(server_time) {
        const now = Date.now()
        const offset = server_time - now

        if (this._offset !== null) {
            this._offset = lerp(this._offset, offset, this._delta)
        } else {
            this._offset = offset
        }
    }
}

function lerp(a, b, delta) {
    return a * (1 - delta) + b * delta
}

function generic_lerp(a, b, delta) {
	if (typeof a === 'number') return lerp(a, b, delta)
	if (a.constructor === Array) return a.map((ai, i) => lerp(ai, b[i], delta))
	console.error(`Could not lerp ${a}`)
	return null
}
