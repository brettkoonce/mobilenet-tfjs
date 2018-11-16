
## Links

Heavily based off of  [a blog post by James Thomas](http://jamesthom.as/blog/2018/08/13/serverless-machine-learning-with-tensorflow-dot-js/).


## Test commands

```
(echo -n '{"image": "'; base64 ./panda.jpg; echo '"}') | curl -u 268a0fa1-6af8-4a6e-bb58-1e3ef8113ad7:pGOaYxUb1wLhzDa47Mk9dmLpsLxjIIHPZcvt9fDDk3bu0YTBTfyDvSQ2R5MhA3ob -d @- -H "Content-Type: application/json" -X POST https://openwhisk.ng.bluemix.net/api/v1/namespaces/brett%40quarkworks.co_dev/actions/classify?blocking=true
```


```
(echo -n '{"image": "'; base64 ./bird.jpg; echo '"}') | curl -u 268a0fa1-6af8-4a6e-bb58-1e3ef8113ad7:pGOaYxUb1wLhzDa47Mk9dmLpsLxjIIHPZcvt9fDDk3bu0YTBTfyDvSQ2R5MhA3ob -d @- -H "Content-Type: application/json" -X POST https://openwhisk.ng.bluemix.net/api/v1/namespaces/brett%40quarkworks.co_dev/actions/classify?blocking=true
```

## Notes


if you deploy your own ibmcloud instance, you can create your own:

```
ibmcloud fn action update classify --docker jamesthomas/action-nodejs-v8:tfjs index.js
```

then invoke:

```
ibmcloud fn action invoke classify -r -p image $(base64 panda.jpg)
```
