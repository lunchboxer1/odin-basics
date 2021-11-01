#!/usr/bin/node

const {MongoClient} = require('mongodb');

async function main() {
  //Atlas cluster connection string
  const mongoURI = 'mongodb+srv://admin:wordpass@sandbox.34i1p.mongodb.net/Sandbox?retryWrites=true&w=majority';
  //raw mongodb+srv://admin:<password>@sandbox.34i1p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

  //Make the client
  const client = new MongoClient(mongoURI);

  const listings = [
    {
      name: "Nice Shack",
      summary: "A great shack in the woods",
      bedrooms: 1,
      bathrooms: 0
    },
    {
      name: "Nice Shanty",
      summary: "A moderate shanty by a quarry",
      bedrooms: 1,
      bathrooms: 1
    },
  ];

  const listing = {
    name: "Lovely Loft",
    summary: "A chamring loft is Paris",
    bedrooms: 1,
    bathrooms: 1
  }

  //Connect to DB
  try {
    await client.connect();

    //await listDatabases(client);

    //await createOneListing(client, listing);

    //await createMultipleListings(client, listings);

    //await findOneListingByName(client, "Ocean View Waikiki Marina w/prkg");

    //await findListingsWithMinBedsBathsAndMostRecentReviews(client, {minNumBeds: 2, minNumBaths: 2, maxNumResults: 5});

    //await updateOneListByName (client, "Private Room in Bushwick", { bedrooms:2 });

    //await upsertOneListingByName(client, "Cozy Cottage", { name: "Cozy Cottage", bedrooms: 2, bathrooms: 1 });

    await updateAllListingsToHavePropertyType(client);

  //Error handling
  } catch (e) {
    console.error(e);

  //Close connection on completion
  } finally {
    await client.close();
  }
}

//Main entry point
main().catch(console.error);


//Generic function to list all databases
async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

//Crud - C example
async function createOneListing(client, newListing) {
  const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
  console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function createMultipleListings(client, newListings) {
  const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertMany(newListings);
  console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
  console.log(result.insertedIds);
}

//CRUD - R example
async function findOneListingByName(client, nameOfListing) {
  const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({name: nameOfListing});

  if (result) {
    console.log(`found a listing in the collection with the name'${nameOfListing}':0`);
    console.log(result);
  } else {
    console.log(`No listing found with the name ${nameOfListing}`);
  }
}

async function findListingsWithMinBedsBathsAndMostRecentReviews(client, {
  minNumBeds = 0,
  minNumBaths = 0,
  maxNumResults = Number.MAX_SAFE_INTEGER
} = {}) {
  const cursor = client.db("sample_airbnb").collection("listingsAndReviews").find(
    {
      bedrooms: { $gte: minNumBeds},
      bathrooms: {$gte: minNumBaths}
    }
    ).sort({last_review: -1})
    .limit(maxNumResults);

    const results = await cursor.toArray();

    if(results.length > 0) {
      console.log(`Found listing(s) with at least ${minNumBeds} bedrooms and ${minNumBaths})`);
      results.forEach((result, i) => {
        date = new Date(result.last_review).toDateString();

        console.log();
        console.log(`${i + 1}. name: ${result.name}`);
        console.log(` _id: ${result._id}`);
        console.log(` bedrooms: ${result.bedrooms}`);
        console.log(` bathrooms: ${result.bathrooms}`);
        console.log(` most recent review date: ${new Date(result.last_review).toDateString()}`);
      });
    } else {
      console.log(`No listings found!`);
    }
}

//CRUD -U example
async function updateOneListingByName (client, nameOfListing, updatedListing) {
  const result = await client.db("sample_airbnb").collection("listingsAndReviews")
                  .updateOne({name: nameOfListing }, { $set: updatedListing });

  console.log(`${result.matchedCount} document(s) matched the query criteria.`);
  console.log(`${ result.modifiedCount} document(s) was/were updated.`);
}

async function upsertOneListingByName (client, nameOfListing, updatedListing) {
  const result = await client.db("sample_airbnb").collection("listingsAndReviews")
                  .updateOne({name: nameOfListing }, 
                            { $set: updatedListing },
                            { upsert: true });

  console.log(`${result.matchedCount} document(s) matched the query criteria.`);

  if (result.upsertedCount > 0) {

      console.log(`One document was inserted with the id ${result.upsertedId._id}`);

  } else {

      console.log(`${result.modifiedCount} document(s) was/were updated.`);

  }
}

async function updateAllListingsToHavePropertyType(client) {

  const result = await client.db("sample_airbnb").collection("listingsAndReviews")

                      .updateMany({ property_type: { $exists: false } },

                                  { $set: { property_type: "Unknown" } });

  console.log(`${result.matchedCount} document(s) matched the query criteria.`);

  console.log(`${result.modifiedCount} document(s) was/were updated.`);

}

//CRUD -D example
async function deleteListingByName(client, nameOfListing) {

  const result = await client.db("sample_airbnb").collection("listingsAndReviews")

          .deleteOne({ name: nameOfListing });

  console.log(`${result.deletedCount} document(s) was/were deleted.`);

}

async function deleteListingsScrapedBeforeDate(client, date) {

  const result = await client.db("sample_airbnb").collection("listingsAndReviews")

      .deleteMany({ "last_scraped": { $lt: date } });

  console.log(`${result.deletedCount} document(s) was/were deleted.`);

}




