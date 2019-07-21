package com.orangehrm.practice;

import org.junit.Test;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import static org.hamcrest.Matchers.*;

import static io.restassured.RestAssured.*;

public class HamcrestTest {
	
	/*
	 * Retrive quote of specific character and verify that response is 200
	 * and response contains "Power resides where men believe in resides
	 */

	@Test public void verifyResponse() {
		
//		RestAssured.baseURI="https://got-quotes.herokuapp.com";
//		
//		//1 way using JUnit assertions
//		Response rsp=
//		
//		given().queryParam("char", "varys").
//		when().get("/quotes");
//		
//		String responseBody=rsp.asString();
//		System.out.println(responseBody);
//		
//		
//		//2 way to complete request * assertion
//				given().
//					queryParam("char", "varys").
//				when().
//					get("/quotes").
//				then().
//					assertThat().statusCode(200).
//				and().
//					assertThat().body("character", equalTo("Varys"));	
//				
//				//3 way
//				Response rsp1=
//				given().
//					queryParam("char", "varys").
//				when().
//					get("/quotes");
//				
//				rsp1.then().
//					assertThat().statusCode(200).
//				and().
//					body("character", equalTo("Varys"));
			
			//retrieve student with id 123 & verify that response status code is 200 
			//and first name of a student is Vladimir
			
				RestAssured.baseURI="http://pure-ravine-92491.herokuapp.com/syntax/";
				
				Response res = 
				given().
				pathParam("studentId", "123").
			
			when().
				get("api/getStudentProfile/{studentId}");
				
			res.then().
				assertThat().statusCode(200).
			and().
				body("firstName", equalTo("Vladimir"));
			
			System.out.println(res.prettyPrint());
			
}
	}
	
	

