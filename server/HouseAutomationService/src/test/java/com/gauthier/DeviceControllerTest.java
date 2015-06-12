package com.gauthier;

import java.util.List;
import org.junit.*;
import static org.junit.Assert.*;

/**
 * The class <code>DeviceControllerTest</code> contains tests for the class <code>{@link DeviceController}</code>.
 *
 * @generatedBy CodePro at 11/06/15 5:16 PM
 * @author rob
 * @version $Revision: 1.0 $
 */
public class DeviceControllerTest {
	/**
	 * Run the DeviceController() constructor test.
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testDeviceController_1()
		throws Exception {
		DeviceController result = new DeviceController();
		assertNotNull(result);
		// add additional test code here
	}

	/**
	 * Run the boolean addRoom(Room) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testAddRoom_1()
		throws Exception {
		DeviceController fixture = new DeviceController();
		fixture.addRoom(new Room(1, new Light(), new Thermostat(), new Curtain()));
		Room room = new Room(1, new Light(), new Thermostat(), new Curtain());

		boolean result = fixture.addRoom(room);

		// add additional test code here
		assertEquals(true, result);
	}

	/**
	 * Run the boolean addRoom(Room) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testAddRoom_2()
		throws Exception {
		DeviceController fixture = new DeviceController();
		fixture.addRoom(new Room(1, new Light(), new Thermostat(), new Curtain()));
		Room room = new Room(1, new Light(), new Thermostat(), new Curtain());

		boolean result = fixture.addRoom(room);

		// add additional test code here
		assertEquals(true, result);
	}

	/**
	 * Run the List<Room> getAllRooms() method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testGetAllRooms_1()
		throws Exception {
		DeviceController fixture = new DeviceController();
		fixture.addRoom(new Room(1, new Light(), new Thermostat(), new Curtain()));

		List<Room> result = fixture.getAllRooms();

		// add additional test code here
		assertNotNull(result);
		assertEquals(1, result.size());
	}

	/**
	 * Run the String toString() method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testToString_1()
		throws Exception {
		DeviceController fixture = new DeviceController();
		fixture.addRoom(new Room(1, new Light(), new Thermostat(), new Curtain()));

		String result = fixture.toString();

		// add additional test code here
		assertEquals("DeviceController [[Room [1,Device [id=null, type=Light, state=null],Device [id=null, type=Thermostat, state=null],Device [id=null, type=Curtain, state=null]]]]", result);
	}

	/**
	 * Run the Device updateDevice(Device) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testUpdateDevice_1()
		throws Exception {
		DeviceController fixture = new DeviceController();
		fixture.addRoom(new Room(1, new Light(), new Thermostat(), new Curtain()));
		Device device = new Device("", "", "");

		Device result = fixture.updateDevice(device);

		// add additional test code here
		assertEquals(null, result);
	}

	/**
	 * Run the Device updateDevice(String,String,String) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testUpdateDevice_2()
		throws Exception {
		DeviceController fixture = new DeviceController();
		fixture.addRoom(new Room(1, new Light(), new Thermostat(), new Curtain()));
		String deviceType = "";
		String id = "";
		String value = "";

		Device result = fixture.updateDevice(deviceType, id, value);

		// add additional test code here
		assertEquals(null, result);
	}

	/**
	 * Run the Device updateDevice(String,String,String) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testUpdateDevice_3()
		throws Exception {
		DeviceController fixture = new DeviceController();
		String deviceType = "";
		String id = "";
		String value = "";

		Device result = fixture.updateDevice(deviceType, id, value);

		// add additional test code here
		assertEquals(null, result);
	}

	/**
	 * Run the Device updateDevice(String,String,String) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testUpdateDevice_4()
		throws Exception {
		DeviceController fixture = new DeviceController();
		fixture.addRoom(new Room(1, new Light(), new Thermostat(), new Curtain()));
		String deviceType = null;
		String id = "";
		String value = "";

		Device result = fixture.updateDevice(deviceType, id, value);

		// add additional test code here
		assertEquals(null, result);
	}

	/**
	 * Run the Device updateDevice(String,String,String) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testUpdateDevice_5()
		throws Exception {
		DeviceController fixture = new DeviceController();
		fixture.addRoom(new Room(1, new Light(), new Thermostat(), new Curtain()));
		String deviceType = "";
		String id = "";
		String value = "";

		Device result = fixture.updateDevice(deviceType, id, value);

		// add additional test code here
		assertEquals(null, result);
	}

	/**
	 * Run the Device updateDevice(String,String,String) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testUpdateDevice_6()
		throws Exception {
		DeviceController fixture = new DeviceController();
		fixture.addRoom(new Room(1, new Light(), new Thermostat(), new Curtain()));
		String deviceType = "a";
		String id = "";
		String value = "";

		Device result = fixture.updateDevice(deviceType, id, value);

		// add additional test code here
		assertEquals(null, result);
	}

	/**
	 * Run the Device updateDevice(String,String,String) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testUpdateDevice_7()
		throws Exception {
		DeviceController fixture = new DeviceController();
		fixture.addRoom(new Room(1, new Light(), new Thermostat(), new Curtain()));
		String deviceType = "a";
		String id = "";
		String value = "";

		Device result = fixture.updateDevice(deviceType, id, value);

		// add additional test code here
		assertEquals(null, result);
	}

	/**
	 * Run the Device updateDevice(String,String,String) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testUpdateDevice_8()
		throws Exception {
		DeviceController fixture = new DeviceController();
		fixture.addRoom(new Room(1, new Light(), new Thermostat(), new Curtain()));
		String deviceType = "a";
		String id = "";
		String value = "";

		Device result = fixture.updateDevice(deviceType, id, value);

		// add additional test code here
		assertEquals(null, result);
	}

	/**
	 * Run the Device updateDevice(String,String,String) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testUpdateDevice_9()
		throws Exception {
		DeviceController fixture = new DeviceController();
		fixture.addRoom(new Room(1, new Light("1", "off"), new Thermostat("1", "19"), new Curtain("1", "closed")));
		String deviceType = "Curtain";
		String id = "1";
		String value = "open";

		Device result = fixture.updateDevice(deviceType, id, value);

		// add additional test code here
		// An unexpected exception was thrown in user code while executing this test:
		//    java.lang.NullPointerException
		//       at com.gauthier.DeviceController.updateDevice(DeviceController.java:96)
		assertNotNull(result);
	}

	/**
	 * Run the Device updateDevice(String,String,String) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testUpdateDevice_10()
		throws Exception {
		DeviceController fixture = new DeviceController();
		fixture.addRoom(new Room(1, new Light("1", "off"), new Thermostat("1", "19"), new Curtain("1", "closed")));
		String deviceType = "Light";
		String id = "1";
		String value = "open";

		Device result = fixture.updateDevice(deviceType, id, value);

		// add additional test code here
		// An unexpected exception was thrown in user code while executing this test:
		//    java.lang.NullPointerException
		//       at com.gauthier.DeviceController.updateDevice(DeviceController.java:96)
		assertNotNull(result);
	}

	/**
	 * Run the Device updateDevice(String,String,String) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testUpdateDevice_11()
		throws Exception {
		DeviceController fixture = new DeviceController();
		fixture.addRoom(new Room(1, new Light("1", "off"), new Thermostat("1", "19"), new Curtain("1", "closed")));
		String deviceType = "Thermostat";
		String id = "1";
		String value = "39";

		Device result = fixture.updateDevice(deviceType, id, value);

		// add additional test code here
		// An unexpected exception was thrown in user code while executing this test:
		//    java.lang.NullPointerException
		//       at com.gauthier.DeviceController.updateDevice(DeviceController.java:96)
		assertNotNull(result);
	}

	/**
	 * Perform pre-test initialization.
	 *
	 * @throws Exception
	 *         if the initialization fails for some reason
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Before
	public void setUp()
		throws Exception {
		// add additional set up code here
	}

	/**
	 * Perform post-test clean-up.
	 *
	 * @throws Exception
	 *         if the clean-up fails for some reason
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@After
	public void tearDown()
		throws Exception {
		// Add additional tear down code here
	}

	/**
	 * Launch the test.
	 *
	 * @param args the command line arguments
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	public static void main(String[] args) {
		new org.junit.runner.JUnitCore().run(DeviceControllerTest.class);
	}
}