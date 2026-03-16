# Containerization Project 🐳

Dockerized Web Application using **Node.js + Express + PostgreSQL** with **Docker Compose** and **Macvlan Networking**.

---

[View Project Report](Containerization_ProjectReport_VanshikaMunjal_500121784.pdf)  

---

## 📁 Project Structure

```
containerization-project-1
│
├── backend
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   └── .dockerignore
│
├── database
│   └── Dockerfile
│
├── docker-compose.yml
├── project-ss
│   └── screenshots
│
└── README.md
```

---

## 🎯 Objective

The objective of this project is to:

- Containerize a web application using Docker
- Use **Node.js + Express** as backend
- Use **PostgreSQL** as database
- Use **Docker Compose** for orchestration
- Implement **Macvlan networking**
- Verify container networking, volumes, and API functionality

---

## 🌐 Step 1: Create Macvlan Network

```bash
docker network create \
--driver macvlan \
--subnet 172.30.0.0/24 \
--gateway 172.30.0.1 \
-o parent=eth0 \
lan_net
```

![Macvlan Network Creation](project-ss/11.png)

---

## 🌐 Step 2: List Docker Networks

```bash
docker network ls
```

![Docker Network List](project-ss/12.png)

---

## 🔍 Step 3: Inspect Macvlan Network

```bash
docker network inspect lan_net
```

![Docker Network Inspect](project-ss/13.png)

---

## 🚀 Step 4: Build and Start Containers

```bash
docker-compose up --build
```

![Docker Compose Logs](project-ss/16.png)
![Docker Compose Logs](project-ss/17.png)

This confirms that the backend and PostgreSQL containers start successfully.

---

## 🐳 Step 5: Check Running Containers

```bash
docker ps
```

![Running Containers](project-ss/4.png)

Running containers:

- backend_api
- postgres_db

---

## 🌐 Step 6: Inspect Docker Compose Network

```bash
docker network inspect containerization-project-1_default
```

![Network Inspect Part 1](project-ss/5.png)

![Network Inspect Part 2](project-ss/6.png)

This shows the containers connected to the Docker network.

---

## 🔌 Step 7: Health Check API

Endpoint:

```
GET /health
```

Test in browser:

```
http://localhost:3000/health
```

![Health API](project-ss/1.png)

The response **OK** confirms the backend service is running.

---

## ➕ Step 8: Insert Student Record

```bash
curl -X POST http://localhost:3000/students \
-H "Content-Type: application/json" \
-d '{"name":"Vanshika","age":21}'
```

![POST API](project-ss/2.png)

The student record is successfully inserted into PostgreSQL.

---

## 📥 Step 9: Fetch Student Records

```bash
curl http://localhost:3000/students
```

![GET API](project-ss/3.png)

The inserted student record is retrieved successfully.

---

## 🌐 Step 10: Browser Testing

Students endpoint tested in browser:

```
http://localhost:3000/students
```

![Browser Output](project-ss/9.png)

---

## 📡 Step 11: Verify Container IP Addresses

Backend container IP:

```bash
docker inspect backend_api | grep IPAddress
```

![Backend IP](project-ss/14.png)

Database container IP:

```bash
docker inspect postgres_db | grep IPAddress
```

![Database IP](project-ss/15.png)

This confirms both containers are connected to the Docker network.

---

## 💾 Step 12: Persistent Storage Proof

```bash
docker-compose down
docker-compose up
```

![Docker Volumes](project-ss/8.png)

![Docker Volumes](project-ss/9.png)

This confirms persistent storage for PostgreSQL data.

---

## 📦 Step 13: Docker Images

```bash
docker images
```

![Docker Images](project-ss/10.png)

This shows the Docker images used in this project.

---

## ✔ Verification Summary

The following components were successfully verified:

- Macvlan network created successfully  
- Docker containers built and running  
- Backend API responding correctly  
- PostgreSQL database connected  
- Student record inserted using POST request  
- Student records retrieved using GET request  
- Browser API testing successful  
- Container IP addresses verified  
- Docker volumes created for persistence  
- Docker images built successfully  

---

## 👩‍💻 Author

**Vanshika Munjal**  
**SapId: 500121784**  
B.Tech – UPES
