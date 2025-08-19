# 💻 Local AI Chat App: Static Frontend + Dockerized Backend + Ollama (Phi-3 Mini)

## ✅ Overview

This project sets up:

- Static frontend (served manually or using Live Server).
- Node.js backend (Docker).
- Ollama LLM service using Phi-3 Mini (Docker).

## ✅ System Requirements

- Windows 10/11
- Docker Desktop installed on D: drive (or custom location)
- Node.js installed only for frontend (optional)
- At least 16 GB RAM recommended

## ✅ Project Structure

```
my-ai-chat-project/
├── frontend/           ← Static files
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── index.js
├── docker-compose.yml
```

## ✅ High-Level Design (HLD)

### Purpose

- A local or self-hosted chat app for AI responses using lightweight LLM (Phi-3 Mini).

### Functional Requirements

- Accept user input.
- Generate AI response using local LLM.
- Return response through a backend API.
- No dependency on external APIs.

### Non-Functional Requirements

| Requirement     | Details                               |
| --------------- | ------------------------------------- |
| Availability    | Localhost usage; single-user.         |
| Scalability     | Can scale using Docker Compose.       |
| Performance     | < 3 seconds response time.            |
| Security        | Internal use; optional API auth.      |
| Maintainability | Docker-managed services.              |
| Portability     | Deployable on any Docker-enabled OS.  |
| Resource Usage  | 4–8 GB RAM minimum, 10 GB disk space. |

### Services Overview

| Service     | Technology          | Function                     |
| ----------- | ------------------- | ---------------------------- |
| Frontend    | Static HTML/JS      | User input + output display. |
| Backend     | Node.js + Express   | Handles API requests.        |
| LLM Service | Ollama + Phi-3 Mini | Generates AI responses.      |
| Docker      | Docker Compose      | Container orchestration.     |

### System Flow

```
User → Frontend → Backend → Ollama (Phi-3 Mini) → Backend → Frontend → User
```

## ✅ Low-Level Design (LLD)

### Backend Endpoint

- POST `/chat`
- Request: `{ "prompt": "Your question here" }`
- Response: `{ "response": "AI-generated answer" }`

### Docker Services

| Service | Port        | Dependency |
| ------- | ----------- | ---------- |
| Backend | 3000:3000   | Ollama     |
| Ollama  | 11434:11434 | —          |

### System Resource Estimates

| Component              | RAM      | Disk     |
| ---------------------- | -------- | -------- |
| Ollama Service         | 3–5 GB   | 5–8 GB   |
| Backend                | \~200 MB | \~500 MB |
| Docker System Overhead | \~1–2 GB |          |

## ✅ Installation Steps

### 1️⃣ Install Docker on D: Drive (Windows)

- Download: [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
- During install → Advanced → Change disk location to D:
- After install → Docker Desktop → Settings → Resources → Disk Image Location → Set to D:\DockerData or similar.

### 2️⃣ Setup Backend

Create `backend/Dockerfile`, `package.json`, `index.js` as described in the backend folder.

### 3️⃣ Setup docker-compose.yml

```yaml
version: '3.9'

services:
  backend:
    build: ./backend
    ports:
      - "3000:3000"
    volumes:
      - ./backend:/app
      - /app/node_modules
    depends_on:
      - ollama
    command: [ "npm", "run", "dev" ]

  ollama:
    image: ollama/ollama
    ports:
      - "11434:11434"
    volumes:
      - ollama-data:/root/.ollama

volumes:
  ollama-data:

```

### 4️⃣ Build and Run

From the project root:

```bash
docker compose up --build
```

- Backend → [http://localhost:3000](http://localhost:3000)
- Ollama → [http://localhost:11434](http://localhost:11434)

### 5️⃣ Serve Frontend Separately

- Open `frontend/index.html` manually OR
- Use Live Server (VS Code extension) OR
- Use Vite local dev server.

Make sure frontend sends requests to `http://localhost:3000/chat`.

## ✅ Disk Space Estimates

| Component              | Approximate Size |
| ---------------------- | ---------------- |
| Ollama Base Image      | \~1.2 GB         |
| Phi-3 Mini Model       | \~1.8 GB         |
| Backend Container      | \~300–500 MB     |
| Docker System Overhead | \~1–2 GB         |

Total on D: drive: **\~4–6 GB**

## ✅ Uninstall / Cleanup (Docker Only)

To remove all backend and Ollama-related Docker resources:

1️⃣ Stop and remove containers:

```bash
docker compose down
```

2️⃣ Remove images:

```bash
docker rmi ollama/ollama
docker rmi node:18
docker rmi <your-backend-image-name>
```

3️⃣ Remove volumes:

```bash
docker volume rm my-ai-chat-project_ollama-data
```

4️⃣ Optional full cleanup:

```bash
docker system prune -a
docker volume prune
```

✅ Your system-installed Node.js will remain intact.

## ✅ Notes

- You can upgrade from static frontend to Dockerized frontend later using the same backend + Ollama setup.
- For production VPS deployment, update `docker-compose.yml` ports and security settings as required.


## List of Docker commands

🟩 General Info & Status
Command	Description
| Command          | Description                                          |
| ---------------- | ---------------------------------------------------- |
| `docker info`    | Show system-wide info (containers, images, storage)  |
| `docker version` | Display Docker client and server version             |
| `docker stats`   | Live resource usage (CPU, RAM) of running containers |
| `docker ps`      | List running containers                              |
| `docker ps -a`   | List all containers (including stopped)              |

🟨 Image Management

| Command                   | Description                                      |
| ------------------------- | ------------------------------------------------ |
| `docker images`           | List all images                                  |
| `docker pull <image>`     | Download image from Docker Hub                   |
| `docker rmi <image>`      | Remove image                                     |
| `docker build -t myapp .` | Build image from Dockerfile in current directory |



🟦 Container Management
| Command                          | Description                         |
| -------------------------------- | ----------------------------------- |
| `docker run -it ubuntu bash`     | Run container interactively         |
| `docker exec -it <container> sh` | Open shell inside running container |
| `docker start <container>`       | Start a stopped container           |
| `docker stop <container>`        | Stop a running container            |
| `docker restart <container>`     | Restart a container                 |
| `docker rm <container>`          | Remove a stopped container          |
| `docker logs <container>`        | View logs of a container            |


🟧 Volumes & Storage
| Command                     | Description                                               |
| --------------------------- | --------------------------------------------------------- |
| `docker volume ls`          | List volumes                                              |
| `docker volume rm <volume>` | Remove a volume                                           |
| `docker system df`          | Show disk usage by Docker                                 |
| `docker system prune`       | Remove unused containers, images, volumes (⚠️ cleans up!) |
 docker system prune -a --volumes


🟪 Docker Compose

| Command                | Description                              |
| ---------------------- | ---------------------------------------- |
| `docker compose up`    | Start services from `docker-compose.yml` |
| `docker compose down`  | Stop and remove services                 |
| `docker compose logs`  | View logs from all services              |
| `docker compose build` | Build/rebuild services                   |
docker compose up --build

📋 Docker Network Commands Cheat Sheet

| 🧪 **Command**                                              | 🧩 **Action**                       |
| ------------------------------------------------------------| ----------------------------------- |
| `docker network ls`                                         | List all networks                   |
| `docker network inspect <network-name>`                     | Inspect a network                   |
| `docker network create <network-name>`                      | Create a new network                |
| `docker network create --subnet 192.168.1.0/24 my_net`      | Create network with custom subnet   |
| `docker network rm <network-name>`                          | Remove a network                    |
| `docker network connect <network-name> <container-id>`      | Connect container to a network      |
| `docker network disconnect <network-name> <container-id>`   | Disconnect container from a network |
| `docker run --network <network-name> ...`                   | Run container with specific network |
| `docker run --network host ...`                             | Run container on host network       |
| `docker run --network none ...`                             | Run container with no network       |
| `docker exec -it <container1> ping <container2>`            | Ping from one container to another  |

| `docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <container>` | Get container IP address |


wsl --shutdown

