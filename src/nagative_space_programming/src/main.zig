const std = @import("std");
const assert = std.debug.assert;

pub fn main() !void {
    const width = 3;
    const height = 2;
    const result = calculateArea(width, height);
    std.debug.print("negative result is {d}\n", .{result});

    const width_p = 3;
    const height_p = -2;
    const result_p = calculateAreaPositive(width_p, height_p);
    std.debug.print("positive result is {d}\n", .{result_p});

}


fn calculateArea(width: i32, height: i32) i32 {
    assert(width > 0);
    assert(height > 0);

    return width * height;
}


fn calculateAreaPositive(width: i32, height: i32) i32 {
    const safe_width = if (width < 0) 0 else width;
    const safe_height = if (height < 0) 0 else height;

    return safe_width * safe_height;
}

test "test calculateArea with expected area value" {
    const width = 3;
    const height = 2;
    const expected_area = 6;
    try std.testing.expectEqual(expected_area, calculateArea(width, height));
}

test "test positive calculateArea with expected area value" {
    const width = 3;
    const height = 2;
    const expected_area = 6;
    try std.testing.expectEqual(expected_area, calculateArea(width, height));
}
