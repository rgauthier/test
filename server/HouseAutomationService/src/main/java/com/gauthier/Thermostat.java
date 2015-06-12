package com.gauthier;

/**
 * <h1>Thermostat</h1>
 * A device of type Thermostat
 * 
 * @author rob Gauthier
 * @version 1.0
 * @since   2015-06-10
 */
public class Thermostat extends Device {

	public Thermostat() {
		super();
		this.type=Thermostat.class.getSimpleName();
	}

	public Thermostat(String id, String state) {
		super(id, state, Thermostat.class.getSimpleName());
	}
	
	@Override
	public String toString() {
		return "Device [id=" + id + ", type=" + type + ", state=" + state + "]";
	}

}
