import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { StageForm } from '../../../components/forms/StageForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create stage
			</SlotSources.Title>
			<CreateScope entity="Stage" redirectOnSuccess="admin/stage/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create stage" labelSaved="Create stage" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/stage/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Stages
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<StageForm />
				</>
			</CreateScope>
		</>
	)
}
