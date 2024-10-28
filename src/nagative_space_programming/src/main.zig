const std = @import("std");
const assert = std.debug.assert;

pub fn main() !void {
    const width = 3;
    const height = 2;
    const result = calculateArea(width, height);
    std.debug.print("result is {d}", .{result});
}


fn calculateArea(width: i32, height: i32) i32 {
    assert(width > 0);
    assert(height > 0);
    return width * height;
}

test "test calculateArea with expected area value" {
    const width = 3;
    const height = 2;
    const expected_area = 6;
    try std.testing.expectEqual(expected_area, calculateArea(width, height));
}
