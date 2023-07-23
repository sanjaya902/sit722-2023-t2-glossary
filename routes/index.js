var express = require('express');
var router = express.Router();

const nameList = [
{ 'id': 1, 'term': 'Continuous Integration (CI):', 'des': ' CI is a development practice where code changes are automatically integrated into a shared repository multiple times a day. It allows teams to detect and address integration issues early, ensuring a consistent codebase.', 'refe': 'https://www.atlassian.com/continuous-delivery/continuous-integration'},
{'id': 2, 'term': 'Continuous Deployment (CD)', 'des': 'CD is the process of automatically deploying code changes to production after successful CI and passing automated tests. It ensures a streamlined and automated software delivery pipeline.', 'refe': 'https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment'},
{'id': 3, 'term': 'Infrastructure as Code (IaC)', 'des': ' IaC is the practice of managing and provisioning infrastructure through machine-readable configuration files. It enables version control, scalability, and consistency in infrastructure management.', 'refe': 'https://www.hashicorp.com/resources/what-is-infrastructure-as-code'},
{'id': 4, 'term': 'DevOpss', 'des': 'DevOps is a cultural and collaborative approach that fosters close cooperation between development and operations teams throughout the software development life cycle. It aims to improve software delivery speed and reliability.', 'refe': 'https://aws.amazon.com/devops/what-is-devops/'},
{'id': 5, 'term': 'Microservices', 'des': 'Microservices is an architectural pattern where a software application is divided into small, loosely coupled services that can be developed, deployed, and scaled independently. It enables greater flexibility and modularity.', 'refe': 'https://microservices.io/'},
{'id': 6, 'term': 'Docker', 'des': 'Docker is a containerization platform that allows developers to package applications and their dependencies into lightweight containers. Containers ensure consistent environments and facilitate portability across different systems.', 'refe': 'https://www.docker.com/what-docker'},
{'id': 7, 'term': 'Kubernetes', 'des': ' Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It simplifies container management at scale.', 'refe': 'https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/'},
{'id': 8, 'term': 'Monitoring and Observability', 'des': 'Monitoring involves tracking the performance and health of systems, applications, and infrastructure. Observability takes monitoring further, emphasizing understanding system behavior through logs, metrics, and traces.', 'refe': 'https://www.oreilly.com/library/view/monitoring-and-observability/9781492076848/'},
{'id': 9, 'term': 'Continuous Monitoring', 'des': ' Continuous Monitoring is an ongoing process of gathering and analyzing real-time data to ensure system performance, security, and compliance. It helps detect issues proactively and improves overall system reliability.', 'refe': 'https://www.csoonline.com/article/2130012/what-is-continuous-monitoring-and-why-is-it-important.html'},
{'id': 10, 'term': 'Configuration Management', 'des': ' Configuration Management involves managing and maintaining the configuration settings and parameters of software and infrastructure components. It ensures consistency across different environments and reduces manual errors.', 'refe': 'https://www.atlassian.com/continuous-delivery/configuration-management'},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary', sub: 'ABC', names: nameList  });
});

module.exports = router;
