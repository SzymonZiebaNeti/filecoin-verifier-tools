const lotus_endpoint = 'ws://localhost:1234/rpc/v0'
const token_path = `${process.env.HOME}/.lotus/token`
const postgres_conn_url = 'postgres://postgres:1234@localhost:5432/lotus'
const verifier_mnemonic = 'exit mystery juice city argue breeze film learn orange dynamic marine diary antenna road couple surge marine assume loop thought leader liquid rotate believe'
const rootkey_mnemonic = 'robot matrix ribbon husband feature attitude noise imitate matrix shaft resist cliff lab now gold menu grocery truth deliver camp about stand consider number'
const nerpa_mnemonic = 'insane again foster foster garlic address stick caught style disorder fuel distance turtle actual clutch tilt spice lobster security rubber fog thank together bubble'

const path = "m/44'/1'/0/0"
const nerpa_path = "m/44'/1'/1/0"

module.exports = {
  lotus_endpoint: lotus_endpoint,
  token_path: token_path,
  postgres_conn_url: postgres_conn_url,
  path,
  nerpa_path,
  rootkey_mnemonic,
  verifier_mnemonic,
  nerpa_mnemonic,
}
