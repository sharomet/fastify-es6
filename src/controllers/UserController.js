export class UserController {

    index(req, reply) {
		reply.send([
			{'name': 'Alex'},
			{'name': 'Test 1'},
			{'name': 'Test 2'},
			{'name': 'Test 3'},
			{'name': 'Test 4'}
		])
    }
    
}