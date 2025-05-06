pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Start or restart app with PM2') {
            steps {
                sh '''
                    if ! pm2 list | grep -q movie-app; then
                      pm2 start app.js --name movie-app
                    else
                      pm2 restart movie-app
                    fi
                    pm2 save
                '''
            }
        }

        stage('Run test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
