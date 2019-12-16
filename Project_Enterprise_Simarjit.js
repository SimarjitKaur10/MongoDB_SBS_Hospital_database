//Simarjit Kaur

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Simar:Sunny123gg@cluster0-xbxcz.mongodb.net/test";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology:true });
client.connect(err => {
	
	/*
	const collection = client.db("SBS_Hospital").collection("Doctors");
  
	var insertDoctors=[{Doctor_ID:101,FullName:"Andrew Phelps",Gender:"M",Position:"Neurologist",Dept_ID:"AAA4",SalaryPH:56,SSN:918273654,Email:"ap123@sbshosp.com",Phone:						1029384731},
						{Doctor_ID:102,FullName:"Andrea Alexander",Gender:"F",Position:"Dermatologist",Dept_ID:"AAA2",SalaryPH:48,SSN:918271054,Email:"aa343@sbshosp.com",Phone:1029329731},
						{Doctor_ID:103,FullName:"George Brown",Gender:"M",Position:"Psychologist",Dept_ID:"AAA1",SalaryPH:53,SSN:918271234,Email:"gb123@sbshosp.com",Phone:1029384987},
						{Doctor_ID:104,FullName:"Peter Haag",Gender:"M",Position:"Pediatrician",Dept_ID:"AAA5",SalaryPH:49,SSN:972573654,Email:"peth910@sbshosp.com",Phone:1029356731},
						{Doctor_ID:105,FullName:"Bruce Wayne",Gender:"M",Position:"Surgeon",Dept_ID:"AAA3",SalaryPH:78,SSN:910987654,Email:"brucew1@sbshosp.com",Phone:1192384731}];
						
	collection.insertMany(insertDoctors,function(err,result){
		if(err) throw err;
		
	console.log("Inserted 5 rows into Doctors table..");
	*/
	/*
	
	
	const collection = client.db("SBS_Hospital").collection("Patient");
	
	var insertPatient=[{Patient_Number:1301,FullName:"Amitabh Bachchan",Gender:"M",Age:78,Blood_Group:"O-",Email:"mardkadard@gmail.com",Phone:8787565634},
						{Patient_Number:1302,FullName:"Sunny Deol",Gender:"M",Age:55,Blood_Group:"B+",Email:"dhaaikilo@haath.com",Phone:8282464678},
						{Patient_Number:1303,FullName:"Rekha",Gender:"F",Age:75,Blood_Group:"B+",Email:"ekchutkisindoor@gmail.com",Phone:8764925923},
						{Patient_Number:1304,FullName:"Kaajol",Gender:"F",Age:43,Blood_Group:"O+",Email:"jasimranja@jeelezindagi.com",Phone:9876456492},
						{Patient_Number:1305,FullName:"Salman Khan",Gender:"M",Age:53,Blood_Group:"AB+",Email:"karanarjun@aayenge.com",Phone:8928476492}];
						
	collection.insertMany(insertPatient,function(err,result){
		if(err) throw err;
		
	console.log("Inserted 5 rows into Patient table..");
	
	*/
	/*
	const collection = client.db("SBS_Hospital").collection("Drug");
	var insertDrug=[{Drug_ID:15001,Drug_Name:"Tacrolimus",Major_Chemical:"calcineurin",Drug_Cost:45},
					{Drug_ID:15002,Drug_Name:"Calcipotriene",Major_Chemical:"Dovonex",Drug_Cost:67},
					{Drug_ID:15003,Drug_Name:"Prozac",Major_Chemical:"Fluoxetine",Drug_Cost:89},
					{Drug_ID:15004,Drug_Name:"Elavil",Major_Chemical:"Amitriptyline",Drug_Cost:119},
					{Drug_ID:15005,Drug_Name:"Zingiber",Major_Chemical:"Folic Acid",Drug_Cost:99}];
						
	collection.insertMany(insertDrug,function(err,result){
		if(err) throw err;
		
	console.log("Inserted 5 rows into Drug table..");
	*/
	
	const collection = client.db("SBS_Hospital").collection("Doctors");

	var updateSimar = { Doctor_ID: 102 };
	var newvalueSimar = { $set: {SalaryPH: 58 } };
	
	collection.updateOne(updateSimar, newvalueSimar, function(err, res) {
    if (err) throw err;
    console.log("Update complete");
	
  client.close();

	});
});


