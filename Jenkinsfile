// Jenkinsfile — in the project root
pipeline {
  agent any
 
  tools {
    nodejs 'nodejs-18' // must match the name configured in Global Tool Configuration
  }
 
  stages {
    stage('Checkout Code') {
      steps {
        checkout scm
      }
    }
 
    stage('Install Dependencies') {
      steps {
        bat 'npm ci'
        bat 'npx playwright install --with-deps'
      }
    }
 
    stage('Run Playwright Tests') {
      steps {
        bat 'npx playwright test'
      }
    }
  }
 
  post {
    always {
      archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
    }
    failure {
      echo '❌ Playwright tests failed'
    }
    success {
      echo '✅ Playwright tests passed'
    }
  }
}
