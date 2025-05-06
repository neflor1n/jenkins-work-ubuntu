pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Start Express app via PM2') {
            steps {
                sh '''
                    if ! pm2 list | grep -q magustoit-app; then
                      pm2 start app.js --name magustoit-app
                    else
                      pm2 restart magustoit-app
                    fi
                    pm2 save
                '''
            }
        }
    }
}
