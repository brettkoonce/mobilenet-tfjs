```
(echo -n '{"image": "'; base64 ./panda.jpg; echo '"}') | curl -u e742b9bb-a678-428d-a1c1-1fdc370e6d2a:Io6TQ4lQqzcQz64lTq5jf9BiYgE1EzP1b5OQlqaCJWLneQKbYi2o16R4Lhv29v4m -d @- -H "Content-Type: application/json" -X POST https://openwhisk.ng.bluemix.net/api/v1/namespaces/sgraham785%40gmail.com_dev/actions/classify?blocking=true
```

if you deploy your own ibmcloud instance, you can create your own:

```
ibmcloud fn action create classify --docker sgraham785/tfjs-openwisk index.js
```

then invoke:

```
ibmcloud fn action invoke classify -r -p image $(base64 panda.jpg)
```
