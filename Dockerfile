# 使用 Node 的官方印象檔
FROM node:16

# 設定目錄
WORKDIR /

# 複製 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安裝vue相關差件
RUN npm install
# 复制当前目录的所有文件到工作目录
COPY . .
RUN npm run build

# 安装 vite
RUN npm install -g vite
COPY vite.config.ts .
# 開啟端口
EXPOSE 8080
# 設置運作時候的指令
CMD ["npm", "run", "preview"]