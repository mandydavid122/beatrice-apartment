// node test/overlap.test.mjs  — self-check for booking date logic.
import assert from "node:assert";
import { rangesOverlap, validateDates, isValidDate, safeEqual } from "../functions/api/_shared.js";

// --- rangesOverlap (half-open) ---
assert.equal(rangesOverlap("2026-08-01", "2026-08-05", "2026-08-03", "2026-08-07"), true, "partial overlap");
assert.equal(rangesOverlap("2026-08-01", "2026-08-05", "2026-08-05", "2026-08-09"), false, "checkout==checkin is free");
assert.equal(rangesOverlap("2026-08-01", "2026-08-05", "2026-08-06", "2026-08-09"), false, "gap = no overlap");
assert.equal(rangesOverlap("2026-08-02", "2026-08-04", "2026-08-01", "2026-08-10"), true, "fully contained");

// --- validateDates ---
assert.equal(validateDates("2026-08-01", "2026-08-05", "2026-07-10").ok, true, "valid future range");
assert.equal(validateDates("2026-07-01", "2026-08-05", "2026-07-10").error, "check_in_past", "past checkin rejected");
assert.equal(validateDates("2026-08-05", "2026-08-01", "2026-07-10").error, "check_out_before_check_in", "reversed rejected");
assert.equal(validateDates("2026-08-05", "2026-08-05", "2026-07-10").error, "check_out_before_check_in", "zero-night rejected");
assert.equal(validateDates("2026-13-40", "2026-08-05", "2026-07-10").error, "invalid_date", "garbage date rejected");

// --- isValidDate ---
assert.equal(isValidDate("2026-02-29"), false, "2026 not a leap year");
assert.equal(isValidDate("2024-02-29"), true, "2024 leap year ok");

// --- safeEqual ---
assert.equal(safeEqual("hunter2", "hunter2"), true);
assert.equal(safeEqual("hunter2", "hunter3"), false);
assert.equal(safeEqual("a", "aa"), false);

console.log("overlap.test.mjs: all assertions passed");
