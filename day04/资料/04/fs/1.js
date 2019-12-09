et update
# 添加相关软件包
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
# 下载软件包的合法性，需要添加软件源的 GPG 密钥
curl -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
# source.list 中添加 Docker 软件源 
sudo add-apt-repository \
    "deb [arch=amd64] https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu \
    $(lsb_release -cs) \
    stable"
# 安装 Docker CE
sudo apt-get update
sudo apt-get install docker-ce
# 启动 Docker CE
sudo systemctl enable docker sudo systemctl start docker
# 建立 docker 用户组(附加)
sudo groupadd docker
sudo usermod -aG docker $USER
# Helloworld测试
docker run hello-world

镜像加速
Azure 中国镜像 https://dockerhub.azk8s.cn
 
开课吧web全栈架构师
阿里云加速器(需登录账号获取)
七牛云加速器 https://reg-mirror.qiniu.com

# /etc/docker/daemon.json
{
  "registry-mirrors": [
    "https://dockerhub.azk8s.cn",
    "https://reg-mirror.qiniu.com"
] }
sudo systemctl daemon-reload
sudo systemctl restart docker
 