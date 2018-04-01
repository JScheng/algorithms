function ArrayList() {
    var array = []
    this.insert = function (item) {
        array.push(item)
    }
    var swap = function (array, index1, index2) {
        [array[index1], array[index2]] = [array[index2], array[index1]]
    }
    this.toString = function () {
        return array.join()
    }
    this.array = function () {
        return array
    }

    // BubbleSort
    this.bubbleSort = function () {
        var length = array.length
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    swap(array, j, j + 1)
                }
            }
        }
    }

    // SelectionSort
    this.selectionSort = function () {
        var length = this.length,
            indexMin
        for (var i = 0; i < length - 1; i++) {
            indexMin = i
            for (var j = i; j < length; j++) {
                if (array[indexMin] > array[j]) {
                    indexMin = j
                }
            }
            if (i !== indexMin) {
                swap(array, i, indexMin)
            }
        }
    }

    // insertionSort
    this.insertionSort = function () {
        var length = array.length,
            j, temp
        for (var i = 1; i < length; i++) {
            j = i
            temp = array[i]
            while (j > 0 && array[j - 1] > temp) {
                array[j] = array[j - 1]
                j--
            }
            array[j] = temp
        }
    }

    // mergeSort
    this.mergeSort = function () {
        array = mergeSortRec(array)
    }

    var mergeSortRec = function (array) {
        var length = array.length

        if (length === 1) {
            return array
        }

        var mid = Math.floor(length / 2),
            left = array.slice(0, mid),
            right = array.slice(mid, length)

        return merge(mergeSortRec(left), mergeSortRec(right))
    }

    var merge = function (left, right) {
        var result = [],
            il = 0,
            ir = 0
        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++])
            } else {
                result.push(right[ir++])
            }
        }

        while (il < left.length) {
            result.push(left[il++])
        }

        while (ir < right.length) {
            result.push(right[ir++])
        }

        return result
    }
}

module.exports = ArrayList