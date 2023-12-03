migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("av34ezp5prmwbud")

  collection.updateRule = " @request.auth.id != \"\" && (@request.auth.isAdmin = true)"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("av34ezp5prmwbud")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
