## Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
2. Build your container: `docker build -t nextjs-docker .`.
3. Run your container(if next_admin already exists `docker remove next_admin`): `docker run -p 3000:3000 --name 
   next_admin nextjs-docker`.
4. You can run your container after that by name: `docker start next_admin`.
5. Similar command to stop: `docker stop next_admin`.

You can view your images created with `docker images`.
You can view your containers with `docker ps -a`.
You can view your running containers with `docker ps`.

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
