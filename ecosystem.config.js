module.exports = {
  apps : [{
    name: 'steelecameron-server',
    script: 'build/server/serverBuild.js',

    // args: 'one two',
    // instances: 1,
    autorestart: true,
    // watch: true,
    // max_memory_restart: '1G',
    env: {
      PORT: 3000
    },
    env_production: {
      PORT: 80
    }
  }],

  // deploy : {
  //   production : {
  //     user : 'node',
  //     host : '212.83.163.1',
  //     ref  : 'origin/master',
  //     repo : 'git@github.com:repo.git',
  //     path : '/var/www/production',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
  //   }
  // }
};
