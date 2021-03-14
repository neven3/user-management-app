function checkIfStringsIncludeFilter(filter, ...strings) {
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].toLowerCase().includes(filter.toLowerCase())) {
            return true;
        }
    }
}

export default checkIfStringsIncludeFilter;