package com.gauthier;

import org.junit.*;
import static org.junit.Assert.*;

/**
 * The class <code>RoomTest</code> contains tests for the class <code>{@link Room}</code>.
 *
 * @generatedBy CodePro at 11/06/15 5:16 PM
 * @author rob
 * @version $Revision: 1.0 $
 */
public class RoomTest {
	/**
	 * Run the Room(int,Light,Thermostat,Curtain) constructor test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testRoom_1()
		throws Exception {
		int id = 1;
		Light light = new Light();
		Thermostat thermostat = new Thermostat();
		Curtain curtain = new Curtain();

		Room result = new Room(id, light, thermostat, curtain);

		// add additional test code here
		assertNotNull(result);
		assertEquals("Room [1,Device [id=null, type=Light, state=null],Device [id=null, type=Thermostat, state=null],Device [id=null, type=Curtain, state=null]]", result.toString());
		assertEquals(1, result.getRoomId());
	}

	/**
	 * Run the boolean equals(Object) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testEquals_1()
		throws Exception {
		Room fixture = new Room(1, new Light(), new Thermostat(), new Curtain());
		Object obj = new Room(1, new Light(), new Thermostat(), new Curtain());

		boolean result = fixture.equals(obj);

		// add additional test code here
		assertEquals(true, result);
	}

	/**
	 * Run the boolean equals(Object) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testEquals_2()
		throws Exception {
		Room fixture = new Room(1, new Light(), new Thermostat(), new Curtain());
		Object obj = null;

		boolean result = fixture.equals(obj);

		// add additional test code here
		assertEquals(false, result);
	}

	/**
	 * Run the boolean equals(Object) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testEquals_3()
		throws Exception {
		Room fixture = new Room(1, new Light(), new Thermostat(), new Curtain());
		Object obj = new Object();

		boolean result = fixture.equals(obj);

		// add additional test code here
		assertEquals(false, result);
	}

	/**
	 * Run the boolean equals(Object) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testEquals_4()
		throws Exception {
		Room fixture = new Room(1, new Light(), new Thermostat(), new Curtain());
		Object obj = new Room(1, new Light(), new Thermostat(), new Curtain());

		boolean result = fixture.equals(obj);

		// add additional test code here
		assertEquals(true, result);
	}

	/**
	 * Run the boolean equals(Object) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testEquals_5()
		throws Exception {
		Room fixture = new Room(1, new Light(), new Thermostat(), new Curtain());
		Object obj = new Room(1, new Light(), new Thermostat(), new Curtain());

		boolean result = fixture.equals(obj);

		// add additional test code here
		assertEquals(true, result);
	}

	/**
	 * Run the boolean equals(Object) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testEquals_6()
		throws Exception {
		Room fixture = new Room(1, new Light(), new Thermostat(), new Curtain());
		Object obj = new Room(1, new Light(), new Thermostat(), new Curtain());

		boolean result = fixture.equals(obj);

		// add additional test code here
		assertEquals(true, result);
	}

	/**
	 * Run the boolean equals(Object) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testEquals_7()
		throws Exception {
		Room fixture = new Room(1, new Light(), new Thermostat(), new Curtain());
		Object obj = new Room(1, new Light(), new Thermostat(), new Curtain());

		boolean result = fixture.equals(obj);

		// add additional test code here
		assertEquals(true, result);
	}

	/**
	 * Run the boolean equals(Object) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testEquals_8()
		throws Exception {
		Room fixture = new Room(1, new Light(), (Thermostat) null, new Curtain());
		Object obj = new Room(1, new Light(), (Thermostat) null, new Curtain());

		boolean result = fixture.equals(obj);

		// add additional test code here
		assertEquals(true, result);
	}

	/**
	 * Run the Device getCurtain() method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testGetCurtain_1()
		throws Exception {
		Room fixture = new Room(1, new Light(), new Thermostat(), new Curtain());

		Device result = fixture.getCurtain();

		// add additional test code here
		assertNotNull(result);
		assertEquals("Device [id=null, type=Curtain, state=null]", result.toString());
		assertEquals(null, result.getId());
		assertEquals(null, result.getState());
		assertEquals("Curtain", result.getType());
	}

	/**
	 * Run the Device getLight() method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testGetLight_1()
		throws Exception {
		Room fixture = new Room(1, new Light(), new Thermostat(), new Curtain());

		Device result = fixture.getLight();

		// add additional test code here
		assertNotNull(result);
		assertEquals("Device [id=null, type=Light, state=null]", result.toString());
		assertEquals(null, result.getId());
		assertEquals(null, result.getState());
		assertEquals("Light", result.getType());
	}

	/**
	 * Run the int getRoomId() method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testGetRoomId_1()
		throws Exception {
		Room fixture = new Room(1, new Light(), new Thermostat(), new Curtain());

		int result = fixture.getRoomId();

		// add additional test code here
		assertEquals(1, result);
	}

	/**
	 * Run the Device getThermostat() method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testGetThermostat_1()
		throws Exception {
		Room fixture = new Room(1, new Light(), new Thermostat(), new Curtain());

		Device result = fixture.getThermostat();

		// add additional test code here
		assertNotNull(result);
		assertEquals("Device [id=null, type=Thermostat, state=null]", result.toString());
		assertEquals(null, result.getId());
		assertEquals(null, result.getState());
		assertEquals("Thermostat", result.getType());
	}

	/**
	 * Run the int hashCode() method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testHashCode_1()
		throws Exception {
		Room fixture = new Room(1, new Light(), new Thermostat(), (Curtain) null);

		int result = fixture.hashCode();

		// add additional test code here
		assertEquals(911022720, result);
	}

	/**
	 * Run the int hashCode() method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testHashCode_2()
		throws Exception {
		Room fixture = new Room(1, (Light) null, (Thermostat) null, new Curtain());

		int result = fixture.hashCode();

		// add additional test code here
		assertEquals(-1551325456, result);
	}

	/**
	 * Run the void setCurtain(Curtain) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testSetCurtain_1()
		throws Exception {
		Room fixture = new Room(1, new Light(), new Thermostat(), new Curtain());
		Curtain curtain = new Curtain();

		fixture.setCurtain(curtain);

		// add additional test code here
	}

	/**
	 * Run the void setLight(Light) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testSetLight_1()
		throws Exception {
		Room fixture = new Room(1, new Light(), new Thermostat(), new Curtain());
		Light light = new Light();

		fixture.setLight(light);

		// add additional test code here
	}

	/**
	 * Run the void setRoomId(int) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testSetRoomId_1()
		throws Exception {
		Room fixture = new Room(1, new Light(), new Thermostat(), new Curtain());
		int roomId = 1;

		fixture.setRoomId(roomId);

		// add additional test code here
	}

	/**
	 * Run the void setThermostat(Thermostat) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testSetThermostat_1()
		throws Exception {
		Room fixture = new Room(1, new Light(), new Thermostat(), new Curtain());
		Thermostat thermostat = new Thermostat();

		fixture.setThermostat(thermostat);

		// add additional test code here
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
		Room fixture = new Room(1, new Light(), new Thermostat(), new Curtain());

		String result = fixture.toString();

		// add additional test code here
		assertEquals("Room [1,Device [id=null, type=Light, state=null],Device [id=null, type=Thermostat, state=null],Device [id=null, type=Curtain, state=null]]", result);
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
		new org.junit.runner.JUnitCore().run(RoomTest.class);
	}
}