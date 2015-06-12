package com.gauthier;

/**
 * <h1>Curtain</h1>
 *  A device of type Curtain
 * 
 * @author rob Gauthier
 * @version 1.0
 * @since   2015-06-10
 */
public class Curtain extends Device{

	public Curtain() {
		super();
		this.type=Curtain.class.getSimpleName();
	}
	
	public Curtain(String id, String state) {
		super(id, state, Curtain.class.getSimpleName());
	}

	@Override
	public String toString() {
		return "Device [id=" + id + ", type=" + type + ", state=" + state + "]";
	}

}
