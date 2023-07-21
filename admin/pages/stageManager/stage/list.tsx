import * as React from 'react'
import { DataGridScope, GenericCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Stages
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="stageManager/stage/create">
					Create new stage
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Stage" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="stageManager/stage/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="name" field="name" header="Name" />
			</DataGridScope>
		</>
	)
}
