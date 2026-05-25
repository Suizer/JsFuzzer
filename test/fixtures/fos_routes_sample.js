// Synthetic fixture in FOSJsRoutingBundle format.
// Contains 5 routes with varied parameter shapes to exercise the parser.
fos.Router.setData({"base_url":"","routes":{
  "fos_js_routing_js":{"tokens":[["text","\/js\/routing"]],"defaults":{"_format":"json"},"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},
  "jwt_generate":{"tokens":[["text","\/nl\/myapp\/jwt\/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},
  "boosted_search":{"tokens":[["text","\/v4\/boosted-search"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},
  "delete_search":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/nl\/myapp\/deleteSearch"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},
  "change_alert":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/nl\/myapp\/changeAlert"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]}
},"prefix":"","host":"www.example.com","port":"","scheme":"https","locale":"nl"});
