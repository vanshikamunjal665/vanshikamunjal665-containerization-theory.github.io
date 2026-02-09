# CONTAINERIZATION AND DEVOPS THEORY

## 22 JANUARY 2026
### DOCKER BASIC COMMANDS

**Reference Link:**  
https://upessocs.github.io/#dir=/Lectures/Containerization%20and%20DevOps/Theory/Containerization%20and%20DevOps/Theory/&file=011%20Docker%20basic%20commands.md

---
### Screenshots of commands
![Image](Images/22Jan/1.png)

![Image](Images/22Jan/2.png)

![Image](Images/22Jan/3.png)

![Image](Images/22Jan/4.png)

![Image](Images/22Jan/5.png)

### 1. Enter wsl
`wsl`

---

### 2. Check docker version
`docker version`  
`docker info`

---

### 3. Image Management
  * List local images  
    `sudo docker images`  

  * Show all images  
    `docker images -a`

  * Only image IDs  
    `docker images -q`

---

### 4. Pull image from registry
`sudo docker pull ubuntu`  

  * specifies version  
  `sudo docker pull ubuntu:22.04`  

---

### 5. Remove Image
![remove image](Images/Images%20Exp2/5a.png)

---

### 6. Verify
![Verify](Images/Images%20Exp2/6a.png)

![Verify](Images/Images%20Exp2/6b.png)

---

## Result

Docker images were successfully pulled, containers executed, and lifecycle commands performed.

---

## Conclusion

This lab demonstrated virtualization using **Vagrant + VirtualBox** and containerization using **Docker**, highlighting clear performance and resource efficiency differences. Containers are better suited for rapid deployment and microservices, while virtual machines provide stronger isolation.
