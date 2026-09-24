import { defineConfig } from 'yapi-to-typescript'

const apiCacheMap: Record<string, boolean> = {}
const yapiToken = process.env.YAPI_TOKEN

if (yapiToken == null || yapiToken == '') {
  throw new Error('缺少 YAPI_TOKEN，无法生成 API 客户端')
}

function yapiFormat(moduleName: string = '') {
  return {
    preproccessInterface(interfaceInfo: any) {
      let path = interfaceInfo.path.replace(/\.html/g, '')
      if (moduleName != '' && !path.startsWith(`/${moduleName}`)) {
        path = `/${moduleName}${path}`
      }
      const segments = path.split('/').filter(Boolean)
      if (segments[0]?.startsWith('xkang-')) {
        segments[0] = segments[0].replace(/^xkang-/, '')
      }
      path = segments.filter((segment: string) => segment !== 'webapi').join('/')

      const functionName = `api_${interfaceInfo.method}_${path}`.replace(/[-_](.)/g, (_, matched) => matched.toUpperCase())
      if (apiCacheMap[functionName]) {
        console.warn(`\n[WARN] 跳过重复接口: ${functionName} | Path: ${interfaceInfo.path}`)
        return false
      }

      apiCacheMap[functionName] = true
      return interfaceInfo
    },
    getRequestFunctionName(interfaceInfo: any, changeCase: any) {
      let path = interfaceInfo.path.replace(/\.html/g, '')
      if (moduleName != '' && !path.startsWith(`/${moduleName}`)) {
        interfaceInfo.path = path = `/${moduleName}${path}`
      }
      const segments = path.split('/').filter(Boolean)
      if (segments[0]?.startsWith('xkang-')) {
        segments[0] = segments[0].replace(/^xkang-/, '')
      }
      path = segments.filter((segment: string) => segment !== 'webapi').join('/')
      return changeCase.camelCase(`api_${interfaceInfo.method}_${path}`)
    },
    processResponseDataTypeName(interfaceInfo: any, changeCase: any) {
      let functionName = this.getRequestFunctionName(interfaceInfo, changeCase)
      functionName = functionName.replace(/^api(Post|Get|Put|Delete)/i, '')
      const typeName = changeCase.pascalCase(functionName)
      return `I${typeName}Res`
    },
    getRequestDataTypeName(interfaceInfo: any, changeCase: any) {
      let functionName = this.getRequestFunctionName(interfaceInfo, changeCase)
      functionName = functionName.replace(/^api(Post|Get|Put|Delete)/i, '')
      const typeName = changeCase.pascalCase(functionName)
      return `I${typeName}Req`
    },
    getResponseDataTypeName(interfaceInfo: any, changeCase: any) {
      let functionName = this.getRequestFunctionName(interfaceInfo, changeCase)
      functionName = functionName.replace(/^api(Post|Get|Put|Delete)/i, '')
      const typeName = changeCase.pascalCase(functionName)
      return `I${typeName}Res`
    },
  }
}

export default defineConfig({
  setRequestFunctionExtraInfo(interfaceInfo: any) {
    return {
      name: interfaceInfo.title,
      category: interfaceInfo._category.name,
      project: interfaceInfo._project.name,
      url: interfaceInfo._url,
      author: interfaceInfo.uid,
    }
  },
  serverUrl: 'http://192.168.143.129:3001',
  typesOnly: false,
  target: 'typescript',
  reactHooks: {
    enabled: false,
  },
  prodEnvName: 'prod',
  devEnvName: 'uat',
  outputFilePath: () => '../src/api/index.ts',
  requestFunctionFilePath: './yapiRequest.uts',
  projects: [
    {
      token: yapiToken,
      categories: [
        {
          id: [0],
          ...yapiFormat(),
        },
      ],
    },
  ],
})
