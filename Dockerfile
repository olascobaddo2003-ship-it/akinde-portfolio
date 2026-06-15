FROM node:18-alpine AS builder
WORKDIR /app

# copy project files
COPY package.json tsconfig.json ./
COPY src ./src
COPY index.html styles.css script.js CNAME README.md ./

# install & build
RUN npm install
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

# copy build and runtime deps
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/index.html ./index.html
COPY --from=builder /app/styles.css ./styles.css
COPY --from=builder /app/script.js ./script.js
COPY --from=builder /app/CNAME ./CNAME

EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "dist/main.js"]
