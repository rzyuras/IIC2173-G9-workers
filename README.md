# IIC2173-G9-workers
El servicio worker se encuentra corriendo en el dns: `https://worker.matiasoliva.me/admin/queues/`

## Docker Compose

Utiliza Docker, ejecutando 3 contenedores. Uno para la Api, otro para los workes y el ultimo para Board.

### Iniciar Docker Compose
Para iniciar todos los servicios definidos en el `docker-compose.yml` en modo detached, ejecuta:

```bash
docker-compose up -d
```

Para hacer un rebuild:
```bash
docker-compose up -d --build
```

Para borrar todo lo relacionado con docker:
```bash
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker volume rm $(docker volume ls -q)
docker system prune -a --volumes
```

