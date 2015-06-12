package com.gauthier;

/**
 * <h1>Light</h1>
 * A device of type Curtain
 * 
 * @author rob Gauthier
 * @version 1.0
 * @since   2015-06-10
 */
public class Light extends Device{


	public Light() {
		super();
		this.type=Light.class.getSimpleName();
	}
	
	public Light(String id, String state) {
		super(id, state, Light.class.getSimpleName());
	}

	@Override
	public String toString() {
		return "Device [id=" + id + ", type=" + type + ", state=" + state + "]";
	}

}
