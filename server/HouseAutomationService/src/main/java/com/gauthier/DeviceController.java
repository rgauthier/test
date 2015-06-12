package com.gauthier;

import java.util.ArrayList;
import java.util.List;

/**
 * <h1>DeviceController</h1>
 * a container for all the devices and rooms that are consumed by the 
 * home automation system
 * 
 * @author rob Gauthier
 * @version 1.0
 * @since   2015-06-10
 */
public class DeviceController {
		private List<Room> rooms = null;
		
		public static final  String TYPE_LIGHT = "Light";
		public static final  String TYPE_CURTAIN = "Curtain";
		public static final  String TYPE_THERMOSTAT = "Thermostat";
		
		
		//todo - what to do with exceptions?  is it ok to let then handle them? 
		
		
		/**
		 * Returns true when a Room object has successfully been added to the
		 * device controller, false if the operation failed.
		 * 
		 * @param room 	Room object containing a fixed set of devices
		 * @return  	Boolean indicating if the room was successfully added.
		 */
		public boolean addRoom(Room room) throws UnsupportedOperationException,
										ClassCastException,IllegalArgumentException, NullPointerException {
			if(rooms == null) {
				rooms = new ArrayList<Room>();
			}
			
			//todo - use a set to avoid duplicates?
			return rooms.add(room);
		}
		
		/**
		 * returns a list of rooms found in the device, null if no rooms exist
		 * 
		 * @return a list of room objects
		 */
		public List<Room> getAllRooms() {
			return rooms;
		}
		
		/**
		 * Return the updated Device object when successful, null if operation failed.
		 * 
		 * @param device 	A device object to be updated from the client
		 * @return			The updated device if successful, null otherwise
		 */
		public Device updateDevice(Device device) {
			return updateDevice(device.getType(), device.getId(), device.getState());
		}
		
		/**
		 * Return the updated Device object when successful, null if operation failed.
		 * 
		 * @param deviceType	a string indicating the device type to be updated
		 * @param id			the unique identifier for the device
		 * @param value			the value to update the device with 
		 * @return				The updated device if successful, null otherwise
		 */
		public Device updateDevice(String deviceType, String id, String value) {
			Device device = null;
			
			if(rooms == null || rooms.size() <= 0 || deviceType == null || deviceType.length() <= 0)
				return device;
			
			//Room room = rooms.get(roomId-1);
			 for(Room room : rooms){
					if(room == null) {
						return device;
					}
					
					switch (deviceType) {
						case TYPE_LIGHT:
							device = room.getLight();
							break;
						case TYPE_CURTAIN:
							device = room.getCurtain();
							break;
						case TYPE_THERMOSTAT:
							device = room.getThermostat();
							break;
						default:
							break;
					}
					
					if(device != null && device.getId().equals(id)) {
						device.setState(value);
						return device;
					}
			 }
			 
			 return device;
		}
		
		@Override
		public String toString() {
			return "DeviceController [" + rooms.toString() + "]";
		}
}

