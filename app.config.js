module.exports = {
    apps : [{
      name: "app",
      script: "./app.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      args: "-p 9001:9002 -s -e https://music.163.com"
    }]
  }