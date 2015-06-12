package com.gauthier;

import org.junit.*;
import static org.junit.Assert.*;

/**
 * The class <code>ThermostatTest</code> contains tests for the class <code>{@link Thermostat}</code>.
 *
 * @generatedBy CodePro at 11/06/15 5:16 PM
 * @author rob
 * @version $Revision: 1.0 $
 */
public class ThermostatTest {
	/**
	 * Run the Thermostat() constructor test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testThermostat_1()
		throws Exception {

		Thermostat result = new Thermostat();

		// add additional test code here
		assertNotNull(result);
		assertEquals("Device [id=null, type=Thermostat, state=null]", result.toString());
		assertEquals(null, result.getId());
		assertEquals(null, result.getState());
		assertEquals("Thermostat", result.getType());
	}

	/**
	 * Run the Thermostat(String,String) constructor test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testThermostat_2()
		throws Exception {
		String id = "";
		String state = "";

		Thermostat result = new Thermostat(id, state);

		// add additional test code here
		assertNotNull(result);
		assertEquals("Device [id=, type=Thermostat, state=]", result.toString());
		assertEquals("", result.getId());
		assertEquals("", result.getState());
		assertEquals("Thermostat", result.getType());
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
		Thermostat fixture = new Thermostat();
		fixture.setState("");
		fixture.setId("");
		fixture.setType("");

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
		new org.junit.runner.JUnitCore().run(ThermostatTest.class);
	}
}