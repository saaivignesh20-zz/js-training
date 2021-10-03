// labelled statements      - JS doesn't support goto statement, so use in loops

console.log("\nTesting labelled statements:");
outer_loop:
for (var outer_index = 0; outer_index < 10; outer_index++) {
    inner_loop:
    for (var inner_index = 0; inner_index < 5; inner_index++) {
        if (inner_index == 3) {
            continue inner_loop;
        } else if (inner_index == 4) {
            break outer_loop;
        } else {
            console.log(`outer_index: ${outer_index}; inner_index: ${inner_index}`);
        }
    }
}