# Используем официальный образ Maven для сборки с JDK 17
FROM maven:3.8.4-openjdk-17-slim AS build
WORKDIR /app

# Копируем pom.xml и скачиваем зависимости
COPY pom.xml .
RUN mvn dependency:go-offline

# Копируем весь проект и выполняем сборку
COPY . .
RUN mvn clean package -DskipTests

# Используем официальный образ OpenJDK для запуска
FROM openjdk:17-jdk-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
