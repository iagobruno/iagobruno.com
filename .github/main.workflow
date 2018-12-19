workflow "New workflow" {
  on = "push"
  resolves = ["Run tests"]
}

action "Run tests" {
  uses = "actions/npm@c555744"
  runs = "npm run test"
  env = {
    NODE_ENV = "test"
  }
}
