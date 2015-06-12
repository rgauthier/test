package com.gauthier;

/**
 * <h1>Room</h1>
 * a container for all the devices that are consumed by the 
 * home automation system
 * 
 * @author rob Gauthier
 * @version 1.0
 * @since   2015-06-10
 */
public class Room {

	private Light light;
	private Thermostat thermostat;
	private Curtain curtain;
	private Integer roomId;
	
	
	public Room(int id, Light light, Thermostat thermostat, Curtain curtain) {
		super();
		this.light = light;
		this.thermostat = thermostat;
		this.curtain = curtain;
		this.roomId = id;
	}

	public Device getLight() {
		return light;
	}

	public void setLight(Light light) {
		this.light = light;
	}

	public Device getThermostat() {
		return thermostat;
	}

	public void setThermostat(Thermostat thermostat) {
		this.thermostat = thermostat;
	}

	public Device getCurtain() {
		return curtain;
	}

	public void setCurtain(Curtain curtain) {
		this.curtain = curtain;
	}

	@Override
	public String toString() {
		return "Room [" + roomId.toString() + "," + light.toString() + "," + thermostat.toString() +"," + curtain.toString() + "]";
	}
	
	public int getRoomId() {
		return roomId;
	}

	public void setRoomId(int roomId) {
		this.roomId = roomId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((curtain == null) ? 0 : curtain.hashCode());
		result = prime * result + ((light == null) ? 0 : light.hashCode());
		result = prime * result
				+ ((thermostat == null) ? 0 : thermostat.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Room other = (Room) obj;
		if (curtain == null) {
			if (other.curtain != null)
				return false;
		} else if (!curtain.equals(other.curtain))
			return false;
		if (light == null) {
			if (other.light != null)
				return false;
		} else if (!light.equals(other.light))
			return false;
		if (thermostat == null) {
			if (other.thermostat != null)
				return false;
		} else if (!thermostat.equals(other.thermostat))
			return false;
		return true;
	}

}
