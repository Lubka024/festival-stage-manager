import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'

export const stageManagerRole = acl.createRole('stageManager', { stages: '*', s3: { ['**']: { upload: true, read: true } } })

export const personIdStageManagerVariable = acl.createPredefinedVariable('personId', 'personID', stageManagerRole)

export const UserRole = def.createEnum('admin', 'stageManager')

export class Festival {
	name = def.stringColumn()
	startDate = def.dateColumn()
	endDate = def.dateColumn()
	venue = def.stringColumn()
	performances = def.oneHasMany(Performance, 'festival')
}


@acl.allow(stageManagerRole, {
	read: true,
	create: true,
	update: true,
})
export class Performance {
	name = def.stringColumn()
	startTime = def.dateTimeColumn()
	endTime = def.dateTimeColumn()
	stage = def.manyHasOne(Stage, 'performances')
	festival = def.manyHasOne(Festival, 'performances')
	equipment = def.oneHasMany(Equipment, 'performance')
}


@acl.allow(stageManagerRole, {
	read: true,
	create: true,
	update: true,
})
export class Stage {
	name = def.stringColumn()
	equipment = def.oneHasMany(Equipment, 'stage')
	performances = def.oneHasMany(Performance, 'stage')
}


@acl.allow(stageManagerRole, {
	read: true,
	create: true,
	update: true,
})
export class Equipment {
	name = def.stringColumn()
	quantity = def.intColumn()
	stage = def.manyHasOne(Stage, 'equipment')
	performance = def.manyHasOne(Performance, 'equipment')
}

@def.Unique('personId', 'email')

@acl.allow(stageManagerRole, {
	when: { personId: personIdStageManagerVariable },
	read: true,
	update: true,
})
export class User {
	personId = def.uuidColumn()
	name = def.stringColumn()
	email = def.stringColumn()
	role = def.enumColumn(UserRole)
}
