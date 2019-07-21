package com.orangehrm.practice;

import org.junit.*;

import io.restassured.RestAssured;
import io.restassured.response.Response;

public class ApiGetDemo {
	
	@Test
	public void getWeather() {
		
		//get method will give you back response
		Response response=RestAssured.when().get("http://restapi.demoqa.com/utilities/weather/city/Fairfax");
		response.prettyPrint();
		int code=response.getStatusCode();
		System.out.println(code);
	}
		// get status and print response from country Api
	@Test
	public void getCounry() {
		Response response=RestAssured.when().get("http://restcountries.eu/rest/v1/name/Nepal");
//		response.prettyPrint();
		int code=response.getStatusCode();
		Assert.assertEquals(200,  code);
		
		// retrive body response as String
		String body=response.asString();
		System.out.println(body);
		Assert.assertTrue(body.contains("Kathmandu"));
		
		
		String header=response.getHeader("Date");
		System.out.println(header);
		
		
	}
}


