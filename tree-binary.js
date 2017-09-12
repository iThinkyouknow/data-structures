const {log} = console;

const create_node = (val) => {
	return {
		val: val,
		left: null,
		right: null
	}
};

const create_binary_tree = (node) => {

	const calc_depth = (val_1, val_2) => {

		// find val_1
		const find_val_1 = (_val_1) => (curr_node) => {
				if (curr_node === null) return null;
		
				if (curr_node.val === _val_1) {
					// find val_2
					return curr_node;

				} else if (_val_1 < curr_node.val) {
					return find_val_1(_val_1)(curr_node.left);

				} else if (_val_1 > curr_node.val) {
					return find_val_1(_val_1)(curr_node.right);
				} 
		};

		const find_val_2 = (_val_2) => (curr_node) => (steps) => {
			const new_steps = steps + 1;
			if (curr_node === null) return null;
			
			if (_val_2 === curr_node.val) {
				return steps;

			} else if (_val_2 < curr_node.val) {
				return find_val_2(_val_2)(curr_node.left)(new_steps);

			} else if (_val_2 > curr_node.val) {
				return find_val_2(_val_2)(curr_node.right)(new_steps);
			}
		};

		const val_1_node = find_val_1(val_1)(node);
		if (val_1_node === null) return console.error('val 1 does not exist in tree');
		const depth = find_val_2(val_2)(val_1_node)(0);
		if (depth === null) return console.error('val 2 does not exist in tree');
		return depth;
	};

	const calc_height = () => {
		const traverse = (curr_node) => (steps) => {
			if (curr_node === null) return steps;
			const new_steps = steps + 1;
			const left_steps = traverse(curr_node.left)(new_steps);
			const right_steps = traverse(curr_node.right)(new_steps);
			const both_steps = (left_steps >= right_steps) ? left_steps : right_steps;
	 
			return both_steps;
		};

		return traverse(node)(0);
	};

	const height = calc_height();

	const is_balanced_fn = () => {

	};

	const is_balanced = is_balanced_fn();

	const add_node = (new_node) => {
		const mod_tree_node = {};
		return create_binary_tree(mod_tree_node);
	};

	const remove_node = (val) => {
		const mod_tree_node = {};
		return create_binary_tree(mod_tree_node);
	};

	make_from_array = (arr) => {

	};

	return {
		nodes: node,
		depth: calc_depth,
		height: height,
		is_balanced: is_balanced || is_balanced_fn(),
		add_node: add_node,
		remove_node: remove_node
	};
};

// test case
// const root_node = create_node(678);
// log(root_node);

const test_node = {
	val: 25,
	left: {
		val: 22,
		left: {
			val: 8,
			left: {
				val: 7,
				left: {
					val: 6,
					left: {
						val: 5,
						left: null,
						right: {
							val: 6,
							left: null,
							right: null
						}
					},
					right: null
				},
				right: null
			},
			right: null
		},
		right: null
	},
	right: {
		val: 35,
		left: {
			val: 32,
			left: null,
			right: null
		},
		right: {
			val: 45,
			left: null,
			right: null
		}
	}
};

const b_tree = create_binary_tree(test_node);
log(b_tree);
log(b_tree.height);
