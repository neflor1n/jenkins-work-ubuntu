pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Start app with PM2') {
            steps {
                sh 'pm2 start app.js --name movie-app || pm2 restart movie-app'
                sh 'pm2 save'
            }
        }

        stage('Run test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
