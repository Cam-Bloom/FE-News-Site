import { formatTopicArr } from "./utils";

describe("formatTopicArr", () => {
	test("Should return formatted array", () => {
		const output = formatTopicArr(
			[
				{
					slug: "cooking",
					description: "Hey good looking, what you got cooking?",
				},
				{
					slug: "coding",
					description: "Code is love, code is life",
				},
				{
					slug: "football",
					description: "FOOTIE!",
				},
			],
			"coding"
		);

		const expectedOuput = [
			{
				slug: "coding",
				description: "Code is love, code is life",
			},
			{
				slug: "cooking",
				description: "Hey good looking, what you got cooking?",
			},
			{
				slug: "football",
				description: "FOOTIE!",
			},
		];

		expect(output).toEqual(expectedOuput);
	});
});
