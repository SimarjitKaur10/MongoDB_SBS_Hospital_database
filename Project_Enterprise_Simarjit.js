const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Simar:Sunny123gg@cluster0-xbxcz.mongodb.net/test";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology:true });
client.connect(err => {
  const collection = client.db("SBS_Hospital").collection("Doctors");
  
	var insertDoctors=[{Doctor_ID:101,FullName:"Andrew Phelps",Gender:"M",Position:"Neurologist",Dept_ID:"AAA4",SalaryPH:56,SSN:918273654,Email:"ap123@sbshosp.com",Phone:						1029384731},
						{Doctor_ID:102,FullName:"Andrea Alexander",Gender:"F",Position:"Dermatologist",Dept_ID:"AAA2",SalaryPH:48,SSN:918271054,Email:"aa343@sbshosp.com",Phone:1029329731},
						{Doctor_ID:103,FullName:"George Brown",Gender:"M",Position:"Psychologist",Dept_ID:"AAA1",SalaryPH:53,SSN:918271234,Email:"gb123@sbshosp.com",Phone:1029384987},
						{Doctor_ID:104,FullName:"Peter Haag",Gender:"M",Position:"Pediatrician",Dept_ID:"AAA5",SalaryPH:49,SSN:972573654,Email:"peth910@sbshosp.com",Phone:1029356731},
						{Doctor_ID:105,FullName:"Bruce Wayne",Gender:"M",Position:"Surgeon",Dept_ID:"AAA3",SalaryPH:78,SSN:910987654,Email:"brucew1@sbshosp.com",Phone:1192384731}];
						
	collection.insertMany(insertDoctors,function(err,result){
		if(err) throw err;
		
	console.log("Inserted 5 rows into Doctors table..");
  client.close();

	});
});
