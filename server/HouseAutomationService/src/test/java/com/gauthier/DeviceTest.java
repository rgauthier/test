package com.gauthier;

import org.junit.*;
import static org.junit.Assert.*;

/**
 * The class <code>DeviceTest</code> contains tests for the class <code>{@link Device}</code>.
 *
 * @generatedBy CodePro at 11/06/15 5:16 PM
 * @author rob
 * @version $Revision: 1.0 $
 */
public class DeviceTest {
	/**
	 * Run the Device() constructor test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testDevice_1()
		throws Exception {

		Device result = new Device();

		// add additional test code here
		assertNotNull(result);
		assertEquals("Device [id=null, type=null, state=null]", result.toString());
		assertEquals(null, result.getId());
		assertEquals(null, result.getState());
		assertEquals(null, result.getType());
	}

	/**
	 * Run the Device(String,String,String) constructor test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testDevice_2()
		throws Exception {
		String id = "";
		String state = "";
		String type = "";

		Device result = new Device(id, state, type);

		// add additional test code here
		assertNotNull(result);
		assertEquals("Device [id=, type=, state=]", result.toString());
		assertEquals("", result.getId());
		assertEquals("", result.getState());
		assertEquals("", result.getType());
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
		Device fixture = new Device("", "", "");
		Object obj = new Device("", "", "");

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
		Device fixture = new Device("", "", "");
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
		Device fixture = new Device("", "", "");
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
		Device fixture = new Device("", "", "");
		Object obj = new Device("", "", "");

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
		Device fixture = new Device("", "", "");
		Object obj = new Device("", "", "");

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
		Device fixture = new Device("", "", "");
		Object obj = new Device("", "", "");

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
		Device fixture = new Device("", "", "");
		Object obj = new Device("", "", "");

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
		Device fixture = new Device("", "", (String) null);
		Object obj = new Device("", "", (String) null);

		boolean result = fixture.equals(obj);

		// add additional test code here
		assertEquals(true, result);
	}

	/**
	 * Run the String getId() method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testGetId_1()
		throws Exception {
		Device fixture = new Device("", "", "");

		String result = fixture.getId();

		// add additional test code here
		assertEquals("", result);
	}

	/**
	 * Run the String getState() method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testGetState_1()
		throws Exception {
		Device fixture = new Device("", "", "");

		String result = fixture.getState();

		// add additional test code here
		assertEquals("", result);
	}

	/**
	 * Run the String getType() method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testGetType_1()
		throws Exception {
		Device fixture = new Device("", "", "");

		String result = fixture.getType();

		// add additional test code here
		assertEquals("", result);
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
		Device fixture = new Device((String) null, "", "");

		int result = fixture.hashCode();

		// add additional test code here
		assertEquals(29791, result);
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
		Device fixture = new Device("", (String) null, (String) null);

		int result = fixture.hashCode();

		// add additional test code here
		assertEquals(29791, result);
	}

	/**
	 * Run the void setId(String) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testSetId_1()
		throws Exception {
		Device fixture = new Device("", "", "");
		String id = "";

		fixture.setId(id);

		// add additional test code here
	}

	/**
	 * Run the void setState(String) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testSetState_1()
		throws Exception {
		Device fixture = new Device("", "", "");
		String state = "";

		fixture.setState(state);

		// add additional test code here
	}

	/**
	 * Run the void setType(String) method test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testSetType_1()
		throws Exception {
		Device fixture = new Device("", "", "");
		String type = "";

		fixture.setType(type);

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
		Device fixture = new Device("", "", "");

		String result = fixture.toString();

		// add additional test code here
		assertEquals("Device [id=, type=, state=]", result);
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
		new org.junit.runner.JUnitCore().run(DeviceTest.class);
	}
}