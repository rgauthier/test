package com.gauthier.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.gauthier.Curtain;
import com.gauthier.Device;
import com.gauthier.DeviceController;
import com.gauthier.Light;
import com.gauthier.Room;
import com.gauthier.Thermostat;

/**
 * <h1>DeviceService</h1>
 * a container for all the devices and rooms that are consumed by the 
 * home automation system
 * 
 * @author rob Gauthier
 * @version 1.0
 * @since   2015-06-10
 */
@Path("/json/device")
public class DeviceService {

	private static DeviceController deviceList = null;
	
	/**
	 * 
	 * @return
	 */
	@GET
	@Path("/getAllDevices")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllDevices() {

		if(deviceList == null) {
			deviceList = new DeviceController();
			
			Light light = new Light("houseLightIndicator1","off");
			Curtain curtain = new Curtain("houseCurtainIndicator1","closed");
			Thermostat thermostat = new Thermostat("Thermostat1","19");
			
			Room room1 = new Room(1, light, thermostat, curtain);
			
			Light lightB = new Light("houseLightIndicator2","off");
			Curtain curtainB = new Curtain("houseCurtainIndicator2","closed");
			Thermostat thermostatB = new Thermostat("Thermostat2","8");
			
			Room room2 = new Room(2, lightB, thermostatB, curtainB);
			
			deviceList.addRoom(room1);
			deviceList.addRoom(room2);
		}
			
		//return deviceList;
		return Response.ok(deviceList).build();
	}

	/**
	 * 
	 * @param device
	 * @return
	 */
	@POST
	@Path("/updateDevice")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response setDevice(Device device) {

		String result = "Device not found : ";
		
		if(deviceList == null) {
			return Response.status(404).entity(result).build();
		}
		
		Device responce = deviceList.updateDevice(device);
		if(responce == null) {
			return Response.status(404).entity(result).build();
		}
		
		result = "Device found and updated device with Id: " + device.getId() + " deviceType: " + device.getType();  
				
		return Response.status(201).entity(result).build();
		
	}

}