package com.gauthier;

import org.junit.*;
import static org.junit.Assert.*;

/**
 * The class <code>CurtainTest</code> contains tests for the class <code>{@link Curtain}</code>.
 *
 * @generatedBy CodePro at 11/06/15 5:16 PM
 * @author rob
 * @version $Revision: 1.0 $
 */
public class CurtainTest {
	/**
	 * Run the Curtain() constructor test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testCurtain_1()
		throws Exception {

		Curtain result = new Curtain();

		// add additional test code here
		assertNotNull(result);
		assertEquals("Device [id=null, type=Curtain, state=null]", result.toString());
		assertEquals(null, result.getId());
		assertEquals(null, result.getState());
		assertEquals("Curtain", result.getType());
	}

	/**
	 * Run the Curtain(String,String) constructor test.
	 *
	 * @throws Exception
	 *
	 * @generatedBy CodePro at 11/06/15 5:16 PM
	 */
	@Test
	public void testCurtain_2()
		throws Exception {
		String id = "";
		String state = "";

		Curtain result = new Curtain(id, state);

		// add additional test code here
		assertNotNull(result);
		assertEquals("Device [id=, type=Curtain, state=]", result.toString());
		assertEquals("", result.getId());
		assertEquals("", result.getState());
		assertEquals("Curtain", result.getType());
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
		Curtain fixture = new Curtain();
		fixture.setType("");
		fixture.setId("");
		fixture.setState("");

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
		new org.junit.runner.JUnitCore().run(CurtainTest.class);
	}
}