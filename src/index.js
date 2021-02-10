module.exports = function check(str, bracketsConfig) {
          let arr = []
        Array.from(str).forEach(val => {
            let br = bracketsConfig.find(arr => arr[0] == val || arr[1] == val)
                br[1] == val && arr.length && arr[arr.length-1] == br[0]? arr.pop() : arr.push(val)
        })
        return !arr.length
}
